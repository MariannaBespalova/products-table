import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Table, Button, Input } from 'semantic-ui-react'

class GoodsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newGoodsName: props.product?.name,
      newGoodsCategory: props.product?.category,
      newGoodsPrice: props.product?.price,
      newGoodsAvailable: props.product?.available
    }
  };


  onChangeName = (e) => {
    this.setState({
      newGoodsName: e.target.value
    })
  };

  onChangeCategory = (e) => {
    this.setState({
      newGoodsCategory: e.target.value
    })
  };

  onChangePrice = (e) => {
    this.setState({
      newGoodsPrice: +e.target.value
    })
  };

  onChangeAvailable = (e) => {
    this.setState({
      newGoodsAvailable: +e.target.value
    })
  };


  submitProduct = () => {
    const { product } = this.props;
    const { newGoodsName: name,
      newGoodsCategory: category,
      newGoodsPrice: price,
      newGoodsAvailable: available
    } = this.state;
    const newProduct = { name, category, price, available, id: product ? product.id : uuidv4() };
    if (!newProduct.name ?? !newProduct.category ?? !newProduct.price ?? !newProduct.available) return alert('All fields should be filled');
    this.props.onSubmitProduct(newProduct);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      newGoodsName: "",
      newGoodsCategory: "",
      newGoodsPrice: "",
      newGoodsAvailable: ""
    })
  };

  render() {
    const { newGoodsName, newGoodsCategory, newGoodsPrice, newGoodsAvailable } = this.state;
    const isDisabled = newGoodsName === '' || newGoodsCategory === '' || newGoodsPrice <= 0 || newGoodsAvailable < 0;
    return (
      <Table.Row>
        <Table.Cell>
          <Input onChange={this.onChangeName} value={newGoodsName} placeholder="product name" type="text" />
        </Table.Cell>
        <Table.Cell>
          <Input onChange={this.onChangeCategory} value={newGoodsCategory} placeholder="product category" type="text" />
        </Table.Cell>
        <Table.Cell>
          <Input onChange={this.onChangePrice} value={newGoodsPrice} placeholder="price" type="number" />
        </Table.Cell>
        <Table.Cell>
          <Input onChange={this.onChangeAvailable} value={newGoodsAvailable} placeholder="available" type="number" />
        </Table.Cell>
        <Table.Cell>
          <Button disabled={isDisabled} color="blue" onClick={this.submitProduct}>Submit</Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}


export default GoodsForm;