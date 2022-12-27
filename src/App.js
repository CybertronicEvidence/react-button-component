import React from 'react'
import Button from './components/Button'
import './App.css'
import IconButton from './components/IconButton'
import ButtonIcon from './components/ButtonIcon'

function App() {
  return (
    <div>
      <h1>Buttons</h1>
      <div className='container'>
        <Button name='default' head='<Button />' text='Default' />
        <Button name='outline' head='<Button variant="outline" />' text='Default' />
        <Button name='text' head='<Button variant="text" />' text='Default' />
        <Button name='disable-shadow' head='<Button disableShadow />' text='Default' />
        <Button name='disabled' head='<Button disabled />' text='Disabled' />
        <Button name='text-disabled' head='<Button variant="text" disabled />' text='Disabled' />
        <IconButton name='start-icon' head='<Button startIcon="local_grocery_store" />' />
        <ButtonIcon name='end-icon' head='<Button endIcon="local_grocery_store" />' />
        <Button name='sm' head='<Button size="sm" />' text='Default' />
        <Button name='md' head='<Button size="md" />' text='Default' />
        <Button name='lg' head='<Button size="lg" />' text='Default' />
        <Button name='default' head='<Button color="default" />' text='Default' />
        <Button name='primary' head='<Button color="primary" />' text='Default' />
        <Button name='secondary' head='<Button color="secondary" />' text='Secondary' />
        <Button name='danger' head='<Button color="danger" />' text='Danger' />
      </div>
    </div>
  )
}

export default App
