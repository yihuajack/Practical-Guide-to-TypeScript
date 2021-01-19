// import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import { React } from 'react'
import { App } from './App'

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

const isChecked = () => Math.random() >= 0.5

describe('App Component Test Suits', () => {
  it('renders <App /> components with empty array', () => {
    const fetchList = jest.fn();
    const push = jest.fn();
    const wrapper = shallow(<App list={[]} fetchList={fetchList}
      push={push}/>)
    wrapper.render()
  })

  it('renders <App /> components with array', () => {
    const fetchList = jest.fn();
    const push = jest.fn();
    const list = [
      { id: Math.random(), content: Math.random.toString(), isChecked: isChecked()},
      { id: Math.random(), content: Math.random.toString(), isChecked: isChecked()},
    ]
    const wrapper = shallow(<App list={list} fetchList={fetchList} push={push}/>)
    wrapper.render()
    wrapper.find('li').forEach((element, index) => {
      const item = list[index]
      expect(element.text()).toBe(`${item.isChecked ? '完成' : '未完成'} - ${item.content}`)
    })
  })

  it('fetchList should be call on did mount', () => {
    const fetchList = jest.fn();
    const push = jest.fn();
    mount(<App list={[]} fetchList={fetchList} push={push}/>)
    expect(fetchList.mock.calls.length).toBe(1)
  })
})