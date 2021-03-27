import React, { useCallback } from "react"
import Button from "@material-ui/core/Button"

export function NextButton({ label, dispatch }) {
  const handleClick = useCallback(() => {
    dispatch({ type: "NEXT_STEP" })
  }, [dispatch])

  return (
    <Button type="button" color="secondary" size="small" onClick={handleClick}>
      {label}
    </Button>
  )
}
