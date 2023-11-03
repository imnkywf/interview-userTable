import React, { useState, useEffect } from 'react'
import { Table, Input } from 'antd'
import './index.scss'

const { Search } = Input

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    // render(_, { address }) {
    //   return (
    //     <>{address.street}, {address.suite}, {address.city}, {address.zipcode}</>
    //   )
    // }
  },
  {
    title: '手机',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: '网址',
    dataIndex: 'website',
    key: 'website',
    render(website) {
      return (
        <a href={`http://${website}`} rel="noreferrer">{website}</a>
      )
    }
  },
]

function UserTable() {
  const [userList, setUserList] = useState([])
  const [fullUserList, setFullserList] = useState([])

  const fetchUserList = async () => {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

    const arr = data.map(e => {
      return {
        ...e,
        address: String(e.address.street + e.address.suite),
      }
    })

    setUserList(arr)
    setFullserList(arr)
  }

  const handleSearchUser = (val) => {
    val === '' ? setUserList(fullUserList) : setUserList(fullUserList.filter(e => e.username.toLowerCase().includes(val.toLowerCase())))
  }

  useEffect(() => {
    fetchUserList()
  }, [])

  return (
    <div className='container'>
      <h1 className='title'>用户列表</h1>

      <Search className='search_ipt' onChange={({ target: { value } }) => handleSearchUser(value)} placeholder='请搜索用户名...' />
      <Table dataSource={userList} columns={columns} rowKey='id' pagination={{ pageSize: 5 }} />

    </div>
  )
}

export default UserTable