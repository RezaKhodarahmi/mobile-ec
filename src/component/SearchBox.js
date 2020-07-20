import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default class SearchBox extends React.Component {
 

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          if (!value.query) {
            return null;
          } else {
            return (
                <SearchContainer>
                  <div >
                    {value.filteredData
                      ? value.filteredData.map((item) => {
                          return (
                            <Link to="/details">
                              <div
                                key={item.id}
                                className="row item "
                                onClick={() => {
                                  value.handelDetails(item.id);
                                  value.handleClickOutside();
                                }}
                              >
                                <div className="col-10 text-right">
                                  {item.title}
                                  <p className="itam-paragraph">
                                    {item.info.substr(0, 70)}
                                  </p>
                                </div>
                                <div className="col-2">
                                  <img
                                    className="img-fluid "
                                    src={item.img}
                                    alt="Product images"
                                  />
                                </div>
                              </div>
                            </Link>
                          );
                        })
                      : ""}
                  </div>
                </SearchContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const SearchContainer = styled.div`
width:100%;
  position: static;
  z-index: 2;
  top: 30%;
  right: 7%;
  left: 30%;
  bottom: 30%;
  margin-top: 0.05rem;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background: #f3f3f3;
  overflow:auto;
  display: inline-block;
  align-items: right;
  align-content: right;
  text-align: right;
  .item{
    max-width:100%;
  }
  .item:hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .itam-paragraph {
    color: var(--mainDark);
  }
  text-decoration: none;
`;
