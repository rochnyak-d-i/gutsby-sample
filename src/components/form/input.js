import React, { useCallback } from "react"
import TextField from "@material-ui/core/TextField"

export function Input({ label, name, value, dispatch }) {
  const handleChange = useCallback(
    event => {
      const newValue = event.target.value

      dispatch({
        type: "CHANGE_INPUT_VALUE",
        payload: { name, value: newValue },
      })
    },
    [name, dispatch]
  )

  return (
    <TextField
      label={label}
      type="text"
      value={value}
      name={name}
      onChange={handleChange}
      variant="outlined"
    />
  )
}
