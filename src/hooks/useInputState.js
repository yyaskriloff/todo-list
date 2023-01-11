import { useState } from 'react'
// eslint-disable-next-line import/no-anonymous-default-export
export default initVal => {
    const [value, setValue] = useState(initVal)
    const handleChange = e => {
        setValue(e.target.value)
    }
    const reset = () => {
        setValue("")
    }
    return [value, handleChange, reset]
}