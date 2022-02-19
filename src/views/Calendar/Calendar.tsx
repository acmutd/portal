import React from "react";
import { Layout, Calendar, Badge } from "antd";
import Navbar from "../../components/Navbar/DarkNavbar";
import "./Calendar.css";
import { useRecoilValue } from "recoil";
import { eventMap } from "../../api/state";

export interface calendarEvent {
  color: string;
  content: string;
  link?: string;
}

const CalendarPage = () => {
  const eventsMap = useRecoilValue(eventMap);

  const getListData = (value: any) => {
    const dateKey = `${value.date()}${value.month()}${value.year()}`;
    return eventsMap.get(dateKey) || [];
  };

  const dateCellRender = (value: any) => {
    const listData = getListData(value) as calendarEvent[];
    return (
      <div className="events">
        {listData.map((item: any) => (
          <React.Fragment key={item.content}>
            <a href={item.link} rel="noopener noreferrer" target="_blank">
              <Badge color={item.color} text={item.content} />
            </a>
          </React.Fragment>
        ))}
      </div>
    );
  };

  const getMonthData = (value: any) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = (value: any) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>ACM Fall Kickoff</span>
      </div>
    ) : null;
  };

  return (
    <Layout>
      <Navbar selectedPage="calendar" />

      <Calendar
        style={{ paddingLeft: 15, paddingRight: 15, paddingBottom: 15 }}
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </Layout>
  );
};

export default CalendarPage;
