import React, { useCallback, useReducer } from "react"
import { Step } from "../components/form/step"
import Layout from "../components/layout"

const SCHEMA_STEPS = [
  {
    input: {
      label: "Заполните поле",
      name: "inp1",
      initValue: "",
    },
    next: {
      label: "Следующий шаг",
    },
  },
  {
    input: {
      label: "Введите значение",
      name: "inp2",
      initValue: "",
    },
    next: {
      label: "Следующий шаг",
    },
    prev: {
      label: "Предыдущий шаг",
    },
  },
  {
    input: {
      label: "Значение, пожалуйста",
      name: "inp3",
      initValue: "",
    },
    next: {
      label: "Следующий шаг",
    },
    prev: {
      label: "Предыдущий шаг",
    },
  },
  {
    input: {
      label: "Последнее значение, пожалуйста",
      name: "inp4",
      initValue: "",
    },
    submit: {
      label: "Отправить",
    },
  },
]

const initState = {
  done: false,

  step: 1,

  /**
   * values: {
   *  inp1: "",
   *  inp2: "",
   *  inp3: "",
   *  inp4: "",
   * },
   */
  values: SCHEMA_STEPS.reduce((accum, { input: { name, initValue } }) => {
    accum[name] = initValue

    return accum
  }, {}),
}

function reducer(state, action) {
  const { type, payload } = action

  if (type === "DONE") {
    return {
      ...state,
      done: true,
    }
  }

  if (type === "NEXT_STEP") {
    return {
      ...state,
      step: state.step + 1,
    }
  }

  if (type === "PREV_STEP") {
    return {
      ...state,
      step: state.step - 1,
    }
  }

  if (type === "CHANGE_INPUT_VALUE") {
    const { name, value } = payload

    return {
      ...state,
      values: {
        ...state.values,
        [name]: value,
      },
    }
  }
}

export default function FormPage() {
  const [state, dispatch] = useReducer(reducer, initState)

  const handleSubmit = useCallback(() => {
    dispatch({ type: "DONE" })
  }, [dispatch])

  const stepInfo = SCHEMA_STEPS[state.step - 1]

  return (
    <Layout>
      <pre>{JSON.stringify(state, null, 2)}</pre>

      {!state.done && (
        <form onSubmit={handleSubmit}>
          <Step
            key={state.step}
            {...stepInfo}
            state={state}
            dispatch={dispatch}
          />
        </form>
      )}
    </Layout>
  )
}
