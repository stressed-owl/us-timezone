import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { SelectStateProps } from '../../interface'

const SelectState = ({ state, onSelectChange }: SelectStateProps) => {
  return (
    <Box sx={{ minWidth: 160, maxWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="state-select-label">State</InputLabel>
        <Select
          labelId="state-select-label"
          id="state-select"
          value={state}
          label="Age"
          onChange={onSelectChange}
        >
          <MenuItem value={"Los_Angeles"}>Los Angeles</MenuItem>
          <MenuItem value={"New_York"}>New York</MenuItem>
          <MenuItem value={"Detroit"}>Detroit</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectState