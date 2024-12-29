import React, { useState } from "react";

export default function CustomModal({ title, content }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <div id="myModal" className="modal fade" style={{display: showModal ? 'block' : 'none'}} onClick={() => setShowModal(false)}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" onClick={() => setShowModal(false)} className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">{content}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        id="showModalButton"
        onClick={() => setShowModal(true)}
        className="btn btn-primary"
      >
        Show {title}
      </button>

	  <br />
	  <br />
    </>
  );
}
