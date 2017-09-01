import React from 'react';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back'
import TextField from 'material-ui/TextField';

const getStyles = (props, state) => {
    return {
        root: {
            display: 'flex',
            justifyContent: 'space-between'
        }
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandSearch: false,
            focus: false
        };
    }

    toggleExpandSearch = () => {
        this.props.onToggleExpandSearch(!this.state.expandSearch);

        this.setState({
            expandSearch: !this.state.expandSearch
        }, () => {
            if (this.state.expandSearch) this.textField.focus();
        });
    }

    clearOrClose = () => {
        if (this.textField.input.value != '') {
            this.textField.input.value = '';
            this.textField.focus();
            this.props.onChange('');
        } else {
            this.toggleExpandSearch();
        }
    }

    render() {
        const styles = getStyles(this.props, this.state);

        return (
            <div style={styles.root}>
                <IconButton onClick={this.toggleExpandSearch}>
                    {this.state.expandSearch
                        ? <ArrowBackIcon />
                        : <SearchIcon />}
                </IconButton>
                {this.state.expandSearch &&
                    [<TextField key={1} ref={(element) => { this.textField = element }} hintText="Search" onChange={(e, v) => this.props.onChange(v)} />,
                    <IconButton key={2} onClick={this.clearOrClose}>
                        <CloseIcon />
                    </IconButton>]
                }
            </div>
        )
    }
}

export default SearchBar;