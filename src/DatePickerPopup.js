import React, { useState } from 'react';
import { Menu as SUIMenu } from 'semantic-ui-react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Popover from '@material-ui/core/Popover';
import DatePicker from "./DatePicker";
import momemnt from 'moment';


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
  width : 100%;
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


const Menu = styled(SUIMenu)`
  width : 125px !important;
  height : 352px;
  overflow-y : auto;
  margin : 0 !important;
  border-top : 0 !important;
  border-bottom : 0 !important;
  border-radius : 0 !important;
`;

const PopupFooter = styled.div`
  margin : 25px 15px 25px 0;
  display :flex;
  justify-content : flex-end;
  align-items : center;
`;

const time_table = [
  { name : "5분 전", value : 1000 * 60 * 5},
  { name : "10분 전", value : 1000 * 60 * 10},
  { name : "15분 전", value : 1000 * 60 * 15},
  { name : "1시간 전", value : 1000 * 60 * 60},
  { name : "3시간 전", value : 1000 * 60 * 180},
  { name : "6시간 전", value : 1000 * 60 * 360},
  { name : "12시간 전", value : 1000 * 60 * 720},
  { name : "1일 전", value : 1000 * 60 * 1440},
  { name : "3일 전", value : 1000 * 60 * 4320},
  { name : "7일 전", value : 1000 * 60 * 10080},
  { name : "30일 전", value : 1000 * 60 * 1440 * 30},
  { name : "90일 전", value : 1000 * 60 * 1440 * 90},
  { name : "6달 전", value : 1000 * 60 * 1440 * 180},
  { name : "1년 전", value : 1000 * 60 * 1440 * 180 * 2},  
]

const DatePickerPopup = (props) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  
  const open = Boolean(anchorEl);

  const handlePopover = (e) => {
    setAnchorEl(e.currentTarget);
  }

  return (
    <div className="flex cursor-pointer">
      <CalendarButton onClick={(e) => handlePopover(e)}>
        <span className="mx-3 font-xm">
          팝업 열기
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
            <Menu vertical>
              {time_table.map((el, idx) => 
                <Menu.Item
                  key={`time ${idx}`}
                  name={el.name}
                  active={activeMenuItem === el.name}
                  onClick={(e) => handleMenuItem(e, el.value)}
                />
              )}
            </Menu>
          </div> 

            {/* footer */}
          <hr className="m-0">
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
          </hr>
        </div>
      </Popover>
    </div>
  )
}

export default DatePickerPopup;