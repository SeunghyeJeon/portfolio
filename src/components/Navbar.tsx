import * as S from "./NavbarStyles"

function Navbar() {
  return (
    <S.Nav>
      <S.Container>
        <S.Brand href="#hero">
          Seunghye<span>.</span>
        </S.Brand>

        <S.Menu>
          <S.Link href="#journey">Journey</S.Link>
          <S.Link href="#building">Building</S.Link>
          <S.Link href="#currently">Currently</S.Link>
          <S.Link href="#guestbook">Guestbook</S.Link>
          <S.Link href="#contact">Contact</S.Link>
        </S.Menu>
      </S.Container>
    </S.Nav>
  )
}

export default Navbar