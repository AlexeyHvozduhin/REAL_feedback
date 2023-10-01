const { default: styled } = require('styled-components');

export const TextBox = styled.div`
  /* position: relative; */
  display: flex;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 10px 0;
  /* cursor: pointer; */
  width: 1000px;
  margin: 40px auto 0 auto;

  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: linear-gradient(#b73bdf, #162ac2);
    border-radius: 50%;
    transform: translate(-171px, 100px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  }
  ._film_list_box {
    position: relative;
    min-width: 350px;
    min-width: 400px;
    max-width: 1000px;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    z-index: 10;
    padding: 20px;
    backdrop-filter: blur(25px);
  }
`;
export const Text = styled.p``;

export const PopupWindow = styled.form`
  position: absolute;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: black;
  background-color: rgba(200, 200, 200, 0.9);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  border-radius: 10px;

  max-width: 400px;

  & p {
    font-size: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
  }

  & div {
    display: flex;
    min-width: 200px;
    max-height: 300px;
  }
  & textarea {
    width: 100%;
    height: 100%;

    resize: none;
    border-radius: 10px 0 0 10px;
    outline: 0;
    border: none;
    background-color: rgba(255, 255, 255, 0.6);
  }

  & button {
    border-radius: 0 10px 10px 0;
    width: 40px;
    outline: 0;
    border: none;
  }

  & button:hover {
    transform: scale(1.05);
  }
`;

export const TrheeHundedWwwooods = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          provident quo quia commodi, quisquam quis laborum repellendus? Qui
          vitae sed modi, reprehenderit error corporis ipsum necessitatibus.
          Reiciendis sapiente alias suscipit eos. Quam similique accusamus eum.
          Iusto voluptatum culpa aliquid vero, facilis, doloribus debitis eaque
          iste non esse expedita id voluptates a numquam rem magni qui quisquam
          adipisci recusandae, quasi obcaecati quia laborum magnam error!
          Accusamus voluptatum est doloremque quo, omnis eveniet provident esse
          eos beatae, laboriosam a? Dolorem tempora sed autem asperiores esse
          fugiat dicta beatae suscipit voluptates voluptatum reprehenderit
          expedita consectetur accusantium voluptatibus ipsa neque corporis
          facere error, sunt ad nemo exercitationem? Iste sunt dignissimos
          consequuntur inventore neque et quia ex. Earum, dolorum fugiat dolore
          accusantium hic soluta, possimus nemo cumque natus recusandae maxime
          id aut impedit sint voluptatem doloremque ipsam tempore saepe
          distinctio optio quam? Tempore suscipit dolorum placeat beatae
          explicabo ex nam, sint, aliquam aut id optio maxime provident aperiam
          dolore tempora eius itaque. Culpa asperiores eum, fugit corporis saepe
          recusandae optio cupiditate, perferendis odio itaque, ea ducimus!
          Culpa quibusdam sed, provident nostrum aperiam voluptate amet, magnam
          quaerat accusantium, esse perspiciatis consequuntur libero commodi
          autem doloremque possimus magni. Sunt odio consequatur illo
          repudiandae fuga distinctio tempora perspiciatis sit molestiae aliquam
          cum suscipit tenetur modi illum aspernatur quasi consectetur adipisci
          maiores vel nobis possimus quibusdam, at iste. Sequi, doloremque ipsum
          impedit debitis corrupti animi laborum deserunt eaque repudiandae
          ducimus, dolores unde quibusdam similique dignissimos omnis sint vero
          totam saepe. Veniam aliquam deleniti quas! Eveniet est dolores atque
          quo accusantium voluptate provident excepturi. Ullam facilis eveniet
          ex temporibus. Vitae sed explicabo rem molestias, laborum omnis
          laboriosam harum aspernatur incidunt deleniti aliquid pariatur at?
          Officiis expedita perspiciatis suscipit exercitationem, molestiae, ex
          facere doloremque laudantium dolorum minima hic necessitatibus at
          culpa quis vitae maiores? Quasi temporibus non suscipit deserunt iure
          sequi?`;
