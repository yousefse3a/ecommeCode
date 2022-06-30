import React, {  useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Products from "../../components/Products/Products";
import { mobile } from "../../Responsive";
const Container = styled.div`
  width: 100%;
`;
const Title = styled.h1`
  margin: 1rem 0.5rem;
`;
const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexFlow: "column",
  })}
`;
const Filter = styled.div`
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const SelectContainer = styled.div`
  ${mobile({
    display: "flex",
    flexFlow: "column",
  })}
`;
const Select = styled.select`
  padding: 10px;
  margin: 0 0 0.5rem 0.5rem;
  width: 5.5rem;
  height: 2.5rem;
`;
const Option = styled.option``;
export default function ProductList() {
  const loc = useLocation();
  const [Category, setCategory] = useState(loc.pathname.split("/")[2]);
  const [Filters, setFilters] = useState({});
  const [Sort, setSort] = useState("Newest");
  function handleFilters(e) {
    setFilters({...Filters, [ (e.target.name).toLowerCase()] : (e.target.value).toLowerCase()} );
  }
  return (
    <>
      <Container>
        <Title>{Category}</Title>
        <FilterContainer>
          <Filter>
            <FilterTitle>Filter Products:</FilterTitle>
            <SelectContainer>
              <Select
                name="Color"
                onChange={(e) => {
                  handleFilters(e);
                }}
                defaultValue={"Color"}
              >
                <Option disabled>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
              </Select>
              <Select
                name="size"
                onChange={handleFilters}
                defaultValue={"Size"}
              >
                <Option disabled>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </SelectContainer>
          </Filter>
          <Filter>
            <FilterTitle>Sort Products:</FilterTitle>
            <Select
              onChange={(e) => {
                setSort(e.target.value);
              }}
              defaultValue={"newest"}
            >
              <Option value={"newest"} defaultValue>
                Newest
              </Option>
              <Option value={"asc"}>Price (asc)</Option>
              <Option value={"desc"}>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products Category={Category} Filters={Filters} Sort={Sort} />
      </Container>
    </>
  );
}
