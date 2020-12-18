import React from "react";
import { Header, Container, Table } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import GoodsForm from "./GoodsForm";
import ProductRow from "./ProductRow";


class GoodsList extends React.Component {
  state = {
    goods: [
      { id: uuidv4(), name: "Google Pixel 5", category: "Phones", price: 25849, available: 5 },
      { id: uuidv4(), name: "Google Pixel 4", category: "Phones", price: 20849, available: 5 }
    ]
  }

  addProduct = newProduct => {
    this.setState({
      goods: [...this.state.goods, newProduct]
    })
  }

  removeProduct = id => {
    this.setState({
      goods: this.state.goods.filter(product => product.id !== id)
    })
  }

  editProduct = updatedProduct => {
    this.setState({
      goods: this.state.goods.map(product => product.id === updatedProduct.id ? updatedProduct : product)
    })
  }

  render() {
    const { goods } = this.state;
    return (
      <div>
        <Header content='Каталог товаров' style={{ padding: '30px 0', textAlign:'center' }}/>
        <Container>
          <Table celled padded >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Название</Table.HeaderCell>
                <Table.HeaderCell>Категория</Table.HeaderCell>
                <Table.HeaderCell>Цена</Table.HeaderCell>
                <Table.HeaderCell>Остаток на складе</Table.HeaderCell>
                <Table.HeaderCell>Действие</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {goods.map(product =>
                <ProductRow
                  key={product.id}
                  product={product}
                  onRemoveProduct={this.removeProduct}
                  onEditProduct={this.editProduct}
                />)}
              <GoodsForm onSubmitProduct={this.addProduct} />
            </Table.Body>
          </Table>
        </Container >
      </div>
    )
  }
}

export default GoodsList;