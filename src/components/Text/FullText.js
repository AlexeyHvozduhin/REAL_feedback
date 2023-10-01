import React, { useState, useEffect } from 'react';
import {
  PopupWindow,
  Text,
  TextBox,
  TrheeHundedWwwooods,
} from './FullText.styled';

export const FillText = () => {
  const [selectedText, setSelectedText] = useState('');
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = event => {
    setTextareaValue(event.target.value);
  };

  const handleContextMenu = event => {
    event.preventDefault();
    const selection = window.getSelection();
    const selectedContent = selection.toString();
    if (selectedContent.length > 0) {
      const { clientX, clientY } = event;
      setSelectedText(selectedContent);
      setPopupPosition({ x: clientX, y: clientY });
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  const popupButtonClick = () => {
    console.log('Выбрал: ', selectedText);
    console.log('Ввёл: ', textareaValue);
    setTextareaValue('');
    setShowPopup(false);
  };

  useEffect(() => {
    const handleMouseUp = evt => {
      if (evt.toElement.className.includes('popup'));
      else {
        const selection = window.getSelection();
        const selectedContent = selection.toString();
        if (selectedContent.length === 0) {
          setTextareaValue('');
          setShowPopup(false);
        }
      }
    };
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div onContextMenu={handleContextMenu}>
      {showPopup && (
        <PopupWindow
          className="popup"
          style={{ top: popupPosition.y, left: popupPosition.x }}
          onSubmit={evt => {
            evt.preventDefault();
            popupButtonClick();
          }}
        >
          <h4 className="popup">Сообщить об ошибке</h4>
          <p className="popup">{selectedText}</p>
          <div>
            <textarea
              rows="3"
              className="popup"
              value={textareaValue}
              onChange={handleTextareaChange}
            />
            <button type="submit" className="popup" />
          </div>
        </PopupWindow>
      )}
      <TextBox>
        <div className="_film_list_box">
          <Text>{TrheeHundedWwwooods}</Text>
        </div>
      </TextBox>
    </div>
  );
};
