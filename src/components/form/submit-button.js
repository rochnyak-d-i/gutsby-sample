import React from "react"
import Button from "@material-ui/core/Button"

export function SubmitButton({ label }) {
  return (
    <Button color="primary" type="submit" size="large">
      {label}
    </Button>
  )
}
