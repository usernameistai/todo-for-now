import { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Create from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';

function TodoForm({ addTodo }){
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="outlined-basic" 
          label="Add Todo" 
          variant="outlined" 
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: 
            <InputAdornment position="end" >
              <IconButton type="submit" aria-label="create todo" edge="end">
                <Create color="success"/>
              </IconButton>
            </InputAdornment>
          }}
        />
      </form>
    </ListItem >
  )
}

export default TodoForm;

