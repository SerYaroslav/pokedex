import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { onTypeSelected } from "../../actions";

import "./type-filter.scss"

const TypeFilter = ({ selectedType, onTypeSelected, pokemonList }) => {
  
  const typesArr = pokemonList.map((item) => item.types)
  let setArr = []
  for (let i = 0; i < typesArr.length; i++) {
    setArr = [...setArr, ...typesArr[i]];
  }
  const typeSet = new Set(setArr);

  const uniqueTypes = [...typeSet]
  
  return (
    <label>
      Select the type:
      <select value={selectedType} onChange={(e) => onTypeSelected(e.target.value)} className="select_list">
        <option value="All">All</option>
        {
          uniqueTypes.map(item => <option value={item} key={item}>{item}</option>)
        }
      </select>
    </label>
  );
};

const mapStateToProps = ({ selectedType, pokemonList }) => {
  return { selectedType, pokemonList };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onTypeSelected,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilter);