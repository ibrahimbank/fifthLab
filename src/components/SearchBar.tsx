import {InputAdornment, TextField} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {padding} from "@mui/system";

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
    borderRadius?: string;
    padding?: string;
    background?: string;
    boxShadow?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder= "Find a user", borderRadius = "15px", padding= ".5rem .2rem",  background="#7d7f8d",boxShadow= "0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12)" }) => (
    <TextField
        placeholder={placeholder}
        variant="standard"
        fullWidth
        sx={{ padding: padding, background: background , borderRadius: borderRadius, boxShadow: boxShadow }}
        onChange={(e) => onSearch(e.target.value)}
        InputProps={{
            startAdornment: <InputAdornment position="start"><SearchOutlinedIcon sx={{color: "#404250"}}/></InputAdornment>,
            style: {padding:".2rem 1rem"},
            disableUnderline: true,
        }}
    />
);

export default SearchBar;
