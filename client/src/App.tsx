import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  return <Header />
}

function Header() {
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  function resizeHeader(e: Event): void {
    const document = e.target as HTMLDocument
    const atTopOfPage: boolean = document.documentElement.scrollTop < 10

    if (atTopOfPage) {
      setIsTopOfPage(true)
    } else {
      setIsTopOfPage(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', resizeHeader)
    return function cleanup() {
      window.removeEventListener('scroll', resizeHeader)
    }
  })

  return (
    <>
      <div className="w-full border-b-2 border-gray-100 ">
        <div className="p-3 mx-auto lg:max-w-screen-lg">
          <div className={`${isTopOfPage ? 'text-5xl' : ''} font-semibold`}>
            Star Wars Sim Forum
          </div>
        </div>
      </div>
      <div className="text-5x1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus
        nibh, euismod in sapien et, semper tincidunt est. Nullam dignissim ipsum
        sed lacus fringilla, ac sollicitudin diam iaculis. Maecenas aliquam
        fermentum magna, sed tincidunt orci semper eu. Sed sapien mi, faucibus
        in porttitor nec, vulputate et risus. Curabitur eu commodo lectus, in
        porttitor nisi. Fusce neque lectus, porta eget justo a, tempus placerat
        enim. Praesent convallis diam eu eros ornare rhoncus. Aenean imperdiet
        diam tristique, varius felis vel, fermentum metus. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Aliquam erat volutpat. Integer congue
        ultricies purus, quis consequat turpis consequat finibus. Etiam libero
        velit, vestibulum sed sollicitudin ac, ullamcorper at libero. Etiam
        scelerisque ex quis dui tempus scelerisque. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce
        interdum in elit vel pellentesque. Pellentesque id turpis vel libero
        porttitor placerat laoreet quis arcu. Proin et mauris enim. Nulla
        elementum vestibulum sollicitudin. Donec neque dui, volutpat eu nulla
        ac, lacinia tempus ex. Sed nec tempus lectus. Maecenas aliquam viverra
        massa, vel posuere dui malesuada eget. Phasellus mauris nisi, accumsan
        vitae molestie id, auctor non massa. Phasellus porta egestas orci quis
        consequat. Mauris auctor urna eu augue feugiat egestas. Vestibulum sed
        auctor justo, non varius magna. Nulla consequat aliquet sodales.
        Phasellus eget libero et metus viverra porta eu nec mauris. Vivamus
        rhoncus, massa a blandit placerat, erat nibh tincidunt neque, non
        imperdiet arcu nulla vitae purus. Donec a ultricies ipsum. Praesent
        viverra eleifend sem, quis viverra nulla finibus vel. Suspendisse tempus
        dolor eu volutpat mattis. Proin mattis nibh libero, ac ornare tellus
        vehicula nec. In vulputate et libero eget pellentesque. Donec at
        suscipit mauris. Proin non egestas nibh. Nullam imperdiet arcu vitae
        nulla semper, quis dictum nisl porttitor. Suspendisse sit amet ligula
        urna. Aliquam cursus ultricies placerat. Donec est justo, sagittis id
        ultrices sit amet, sagittis vel orci. Donec eget finibus justo. Quisque
        ac urna non dolor fringilla commodo eget sed purus. Ut accumsan in
        tellus non lacinia. Praesent id rutrum diam. Vestibulum ullamcorper
        aliquet sapien, nec rhoncus lacus pharetra vitae. Vestibulum non dictum
        leo. Ut a lacus vitae nisl ullamcorper congue. Proin vel mattis dui.
      </div>
    </>
  )
}

export default App
