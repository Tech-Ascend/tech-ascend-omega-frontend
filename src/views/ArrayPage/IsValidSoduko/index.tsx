import { useState, useEffect } from "react";
import useArrayPage from "../../../hooks/facades/useArrayPage";

interface SudokuFeedback {
  Digit: number;
  Row: number;
  Column: number;
  Valid: boolean;
  Step: string;
}

function IsValidSudoku() {
  const { handleValidSudoku } = useArrayPage();
  const [feedback, setFeedback] = useState<SudokuFeedback[]>([]);
  const initialBoard: string[][] = Array(9)
    .fill(null)
    .map(() => Array(9).fill("."));
  const [board, setBoard] = useState<string[][]>(initialBoard);

  useEffect(() => {
    setBoard(board);
  }, [board]);

  const handleInputChange = (row: number, col: number, value: string) => {
    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) => (rowIndex === row && colIndex === col ? (value === "" ? "." : value) : cell))
    );
    setBoard(newBoard);
  };

  const handleSubmit = async () => {
    try {
      const { data: response } = await handleValidSudoku(board);
      setFeedback(response);
    } catch (error) {
      console.error("Error validating Sudoku:", error);
    }
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(9, 1fr)",
    gap: "1px",
    backgroundColor: "#000",
    padding: "3px",
    maxWidth: "400px",
    margin: "0 auto 16px auto",
  };

  const getCellStyle = (rowIndex: number, colIndex: number) => ({
    width: "100%",
    height: "40px",
    textAlign: "center" as const,
    border: "1px solid #d1d5db",
    fontSize: "18px",
    backgroundColor: "white",
    borderTop: rowIndex % 3 === 0 ? "3px solid #000" : "0px",
    borderLeft: colIndex % 3 === 0 ? "3px solid #000" : "1px solid #000",
    borderRight: colIndex === 8 ? "5px solid #000" : "0px solid #d1d5db",
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Is Valid Sudoku Board</h1>
      <div style={gridStyle}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              maxLength={1}
              value={cell === "." ? "" : cell}
              onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
              style={getCellStyle(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={handleSubmit}
      >
        Validate Sudoku
      </button>

      {feedback.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Validation Feedback</h2>
          <div className="bg-gray-100 p-4 rounded">
            {feedback.map((item, index) =>
              item.Step != "Empty cell" ? (
                <div key={index} className={`mb-2 p-2 rounded ${item.Valid ? "bg-green-100" : "bg-red-100"}`}>
                  <p>
                    {item.Digit !== -1 && `Digit: ${item.Digit + 1} `}
                    {item.Step}
                  </p>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default IsValidSudoku;
