import React, { useState, useRef } from 'react'
import { Container, HeaderTitle, InputWrapper, Input, FigureWrapper, Figure, UpdateBtnWrapper, UpdateBtn, CustomFileInput } from './styles'
import { UseAuth } from '../../hook/AuthContext'

const UpdateProfile = () => {
    const { user } = UseAuth() as any
    const [avatarIcon, setAvatarIcon] = useState('' as any)
    const [avatarPreview, setAvatarPreview] = useState(user.avatar)
   

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result as string)
                setAvatarIcon(reader.result as any)
            }
        }
        reader.readAsDataURL(e.target.files![0])
    }


  return (
    <Container>
        <HeaderTitle><span>Update</span> Profile</HeaderTitle>
        <form style={{}}>
            <InputWrapper>
              <Input type="text" placeholder="Name" />
            </InputWrapper>
            <InputWrapper>
                <Input type="email" placeholder="Email" />
            </InputWrapper>
            <FigureWrapper>
                <Figure src={avatarPreview} alt="Avatar Preview" />
            </FigureWrapper>
            <InputWrapper>
                <Input 
                  type="file" 
                  placeholder="Profile Picture" 
                  id="customFile"
                  accept="images/*"
                  onChange={onChange}
                />
            </InputWrapper>

            <UpdateBtnWrapper>
              <UpdateBtn type="submit">Update</UpdateBtn>
            </UpdateBtnWrapper>
        </form>
    </Container>
  )
}

export default UpdateProfile