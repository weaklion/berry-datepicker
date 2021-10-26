import React, { useState} from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Popover from '@material-ui/core/Popover';
import DatePicker from "./DatePicker";
import moment from 'moment';
import { useInterval } from './useInterval';



const TODAY = new Date(); 
const YESTERDAY = new Date(TODAY);
YESTERDAY.setDate(YESTERDAY.getDate() -1);

const PopupHeader = styled.div`
  color: #353c46;
  margin : 12px 15px 8px 15px;
  font-weight : 500;
`;

const CalendarButton = styled.div`
  height : 36px;
  border-radius : 4px;
  display : flex;
  align-items : center;
  background : #fafbfb;
  border: 1px solid #d0d4dc;
  color : #434b57;
  font-size : 13px;
  padding : 7px 24px 8px 16px;
  margin-right : 8px;
  white-space : nowrap;
  overflow : hidden;

  img {
    margin-top : 2px;
    margin-right : 5px;
  }
`;

const PopupFooter = styled.div`
  margin : 25px 15px 25px 0;
  display :flex;
  justify-content : flex-end;
  align-items : center;
`;


const DatePickerPopup = (props) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const [start, setStart] = useState(YESTERDAY);
  const [end, setEnd] = useState(TODAY);
  
  const open = Boolean(anchorEl);

  useInterval(() => {

    const TODAY = new Date(); 
    const YESTERDAY = new Date(TODAY);
    YESTERDAY.setDate(YESTERDAY.getDate() -1);
  
    setStart(YESTERDAY);
    setEnd(TODAY);
  }, 1000);

  const handlePopover = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleMenuItem = (e, value) => {

  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  
  return (
    <div className="flex cursor-pointer items-center justify-center h-full">
      <CalendarButton onClick={(e) => handlePopover(e)}>
        <span className="mx-3 font-xm">
        {`${moment(start).format('L')} ${moment(start).format('LTS')}`}
        </span>
      </CalendarButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical : 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical : 'top',
          horizontal: 'left'
        }}
      >
        <PopupHeader>
          <span>날짜 검색</span>
        </PopupHeader>
        <hr className="m-0" />

        <div className="flex">
          <div className="my-4 mx-7">
            <div className="flex mb-4">
              <div className="mr-4">
                <div className="mb-2">
                  From
                </div>
                <DatePicker
                  selected={start}
                  selectsStart
                  startDate={start}
                  endDate={end}
                />
              </div>

              <div>
                <div className="mb-2">
                  To
                </div>
                <DatePicker
                  selected={end}
                  selectsEnd
                  startDate={start}
                  endDate={end}
                />
              </div>
            </div>
        
          </div> 
        </div>
        {/* footer */}
        <hr className="m-0" />
        <PopupFooter>
          <Button 
            color="secondary"
            variant="contained"
            onClick={() => setAnchorEl(null)}
          >
            취소
          </Button>
          <Button
            onClick={() => setAnchorEl(null)}
          >
            확인
          </Button>
        </PopupFooter>
      </Popover>
    </div>
  )
}

export default DatePickerPopup;