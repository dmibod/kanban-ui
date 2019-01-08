import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BoardListItem = ({ id, text }) => (
  <div id={`${id}`} className="card-wrapper float-left m-3">
    <div className="card shadow">
      <div className="card-header">
        <div className="card-title mb-0">
          <Link
            style={{ textDecoration: 'none', fontWeight: '500' }}
            to={`/board/${id}`}
          >
            {text}
          </Link>
          <Link
            to={`/board/delete/${id}`}
          >
          <i className="fa fa-fw fa-trash ml-auto"/>
          </Link>
        </div>
      </div>
      <div className="card-body">
        <div className="card-body-wrapper">
          <div className="card-text small text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis,
            sed temporibus numquam voluptas cupiditate nemo corrupti quia velit
            odio quae natus molestias unde dolor aliquam magni consequuntur nisi
            at illum inventore maxime! Exercitationem minima voluptate, culpa ut
            eveniet enim harum illum eius quaerat alias labore fugiat sapiente
            odit consectetur delectus aliquam amet deleniti in iusto quis
            tempora ullam optio, nostrum quam! Architecto, laboriosam? Culpa
            dolorem eum error dignissimos nostrum ea ratione similique hic
            nesciunt, facere facilis doloremque, praesentium, corporis tempora
            tempore cupiditate ab quam? Incidunt distinctio tempora a illum
            eligendi quod voluptatibus excepturi laboriosam natus repellendus?
            Quam dolor pariatur eveniet error at excepturi aperiam blanditiis
            voluptatem expedita. Nisi saepe nulla accusantium. Consectetur,
            velit voluptate corrupti quae repellat quaerat! Vel ut commodi est
            dolorum ducimus culpa facilis pariatur incidunt, quisquam libero aut
            sint mollitia quaerat ipsum iusto iure fuga nostrum vitae dolor
            perferendis eligendi similique earum? Delectus unde sint
            voluptatibus explicabo vel distinctio dolores illo fugit error
            officia cupiditate, itaque libero ipsam repudiandae provident quasi
            omnis modi ipsa eos quibusdam debitis. Aliquam earum quos vel fugit,
            odit necessitatibus consectetur minima quae tempora quam libero ipsa
            repellendus eius sunt veritatis distinctio quod a laudantium!
            Cupiditate accusamus odit voluptatibus, error autem, enim iusto,
            fuga corporis totam doloremque quaerat? Magni, corporis, et numquam
            vel, nam reiciendis minima vero ullam deserunt quis officia dolor?
            Nihil sunt aperiam sequi labore itaque libero repellat quaerat quo
            sit facilis recusandae ea vero blanditiis nostrum dolorem, illo
            soluta dignissimos praesentium iure ipsum. Nemo ullam dolorem
            cupiditate commodi facilis corporis officia nam alias? Impedit,
            dolores omnis, adipisci, quaerat eligendi aliquam beatae ratione
            debitis in accusamus eum provident quam aut voluptatibus eveniet
            nulla. Nam unde aspernatur error dignissimos odit omnis aperiam
            nesciunt? Quae rerum molestias iusto aliquid harum dolores maiores
            consequatur voluptate architecto odit facilis sapiente sed, nostrum
            doloribus modi?
          </div>
        </div>
      </div>
    </div>
  </div>
);

BoardListItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default BoardListItem;
