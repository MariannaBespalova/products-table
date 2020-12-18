import React from "react";
import { Button, Table } from 'semantic-ui-react';
import GoodsForm from "./GoodsForm";


class ProductRow extends React.Component {
  state = {
    isEdit: false
  };

  onEditProduct = updatedUser => {
    this.setState({ isEdit: false })
    this.props.onEditProduct(updatedUser)
  };

  render() {
    const { product, onRemoveProduct } = this.props;
    const { isEdit } = this.state;
    if (isEdit) {
      return (
        <GoodsForm onSubmitProduct={this.onEditProduct} product={product} />
      )
    }
    return (
        <Table.Row>
          <Table.Cell>{product.name}</Table.Cell>
          <Table.Cell>{product.category}</Table.Cell>
          <Table.Cell>{product.price}</Table.Cell>
          <Table.Cell>{product.available}</Table.Cell>
          <Table.Cell>
            <Button onClick={() => onRemoveProduct(product.id)}>Delete</Button>
            <Button onClick={() => this.setState({ isEdit: true })}>Edit</Button>
          </Table.Cell>
        </Table.Row>
    )
  }
}

export default ProductRow;
