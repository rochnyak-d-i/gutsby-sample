import React from "react"
import List from "@material-ui/core/List"

import { SubmitButton } from "./submit-button"
import { PrevButton } from "./prev-button"
import { NextButton } from "./next-button"
import { Input } from "./input"

export function Step({ input, next, prev, submit, state, dispatch }) {
  return (
    <List>
      {input && (
        <div>
          <Input
            {...input}
            value={state.values[input.name]}
            dispatch={dispatch}
          />
        </div>
      )}
      {next && (
        <div>
          <NextButton {...next} dispatch={dispatch} />
        </div>
      )}
      {prev && (
        <div>
          <PrevButton {...prev} dispatch={dispatch} />
        </div>
      )}
      {submit && (
        <div>
          <SubmitButton {...submit} />
        </div>
      )}
    </List>
  )
}
