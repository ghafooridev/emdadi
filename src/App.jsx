import React, { useState } from "react";
import AceEditor from "react-ace";


import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-vbscript";
import "ace-builds/src-noconflict/snippets/vbscript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-terminal";

const Edit = () => {
  const [value, setValue] = useState('');
  const [theme, setTheme] = useState('github')

  function onChange(newValue) {
    setValue(newValue)
  }

  const onSubmit = async () => {
    console.log("first", value);
  }

  const onChangeTheme = (e) => {
    const { value } = e.target;
    setTheme(value)
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <select onChange={onChangeTheme}>
        <option value="github">
          light
        </option>
        <option value="terminal">
          dark
        </option>
      </select>
      <AceEditor
        placeholder="Placeholder Text"
        style={{ position: "relative", width: "100vh", height: "100vh" }}
        width="100%"
        height="100%"
        value={value}
        mode="vbscript"
        onChange={onChange}
        fontSize={14}
        lineHeight={19}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        theme={theme}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }} />
      <button onClick={onSubmit}>submit</button>
    </div>)
}

export default Edit