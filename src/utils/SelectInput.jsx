import Option from "./Option";


export default function SelectInput(props) {
    return (
      <label>
        
        Select sutable option :-
        <select name="selectedFruit">
        
        {props.options.map((option) =>
        // console.log(option)
        <Option option={option} />
      )}
          
        </select>
      </label>
    );
  }