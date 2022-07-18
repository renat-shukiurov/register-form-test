import styled from "styled-components";

export const Field = styled.div`
  margin-bottom: 20px;
  position: relative;
  
  p {
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 500;
  }
  select, input {
    padding: 5px 10px;
    width: 100%;
    border-radius: 2px;
    border: 1px solid;
    outline: none;
  }

  input[type=checkbox] {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }

  input[type=checkbox] ~ span {
    font-size: 12px;
  }
  
  .error-text {
    font-size: 12px;
    position: absolute;
    bottom: -15px;
    left: 0;
    color: red;
  }

  .form-item.invalid {
    border-color: red;
    color: red;
  }
`;

export const AddressWrapper = styled.div`
    position: relative;
    
`;

export const Autocomplete = styled.div`
    position: absolute;
    border: 1px solid #d4d4d4;
    border-top: none;
    z-index: 99;
    top: calc(100% - 20px);
    left: 0;
    right: 0;
    max-height: 119px;
    overflow-y: auto;
`;

export const AutocompleteItem = styled.div`
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid #d4d4d4;
    font-size: 12px;
`;

export const ButtonWrapper = styled.button`
    width: 200px;
    margin: 0 auto;
    background: #1f8dd2;
    border: 2px solid #1f8dd2;
    padding: 10px 0;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  
  :hover {
    background: #ffffff;
    color: #1f8dd2;
  }
`;