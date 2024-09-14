import { useState, useEffect } from "react";
import useArrayPage from "../../../hooks/facades/useArrayPage";

interface SudokuFeedback {
  Digit: number;
  Row: number;
  Column: number;
  Valid: boolean;
  Step: string;
}

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
    const sudokuFeedback = await handleValidSudoku(board);
    setFeedback(sudokuFeedback);
  };

  return (
    <div>
      <h1>Is Valid Sudoku Board</h1>
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
      <button onClick={handleSubmit}>Validate Sudoku</button>
      {feedback.length > 0 && (
        <div>
          <h2>Validation Feedback</h2>
          <div>
            {feedback.map((item, index) =>
              item.Step != "Empty cell" ? (
                <div key={index}>
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
