import "./ModifyCatalog.css"
import React from "react"
import Add from "../Add/Add.js"
import Delete from "../Delete/Delete.js"
import Edit from "../Edit/Edit.js"
import { Tabs, Tab } from "react-bootstrap"

const pages = {
    Add: {
      title: 'Add Product',
      component: <Add />,
    },
    Delete: {
      title: 'Delete Product',
      component: <Delete />,
    },
    Edit: {
      title: 'Edit Product',
      component: <Edit />,
    },
  }
  

export function Modify() {
    const [key, setKey] = React.useState('Add')

    return (
        <div className="modify">
            <div className="modify-container">
                <div className="modify-title">
                    <h1>Modify Catalog</h1>
                </div>
                <div>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                    {Object.keys(pages).map((k) => (
                        <Tab eventKey={k} title={pages[k].title} key={k}>
                            {pages[k].component}
                        </Tab>
                    ))}
                </Tabs>
                </div>
            </div>
        </div>
    );
}