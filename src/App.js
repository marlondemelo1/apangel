import React from 'react'
import './App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import UserFormDialog from './components/user/form/Dialog'

export default class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      currentEvents: [],
      currentEvent: null,
      display: false,
      name: '',
      dtstart: '',
    }

    this.onHide             = this.onHide.bind(this)
    this.handleTextName     = this.handleTextName.bind(this)
    this.handleTextDate     = this.handleTextDate.bind(this)
    this.handleEvents       = this.handleEvents.bind(this)
    this.handleDateSelect   = this.handleDateSelect.bind(this)
    this.renderEventContent = this.renderEventContent.bind(this)
    this.handleEventClick   = this.handleEventClick.bind(this)
    this.onSubmit           = this.onSubmit.bind(this)

  }

  render() {

    return (
      <div className='demo-app'>
        <div className='demo-app-main'>

          <FullCalendar
            plugins         = {[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar   = {{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            locale          = 'pt-br'
            initialView     = 'timeGridWeek'
            allDaySlot      = {false}
            editable        = {true}
            selectable      = {true}
            selectMirror    = {true}
            dayMaxEvents    = {true}
            weekends        = {true}
            expandRows      = {true}
            contentHeight   = {800}
            slotMinTime     = {"09:00:00"}
            slotMaxTime     = {"22:00:00"}
            initialEvents   = {INITIAL_EVENTS}
            select          = {this.handleDateSelect}
            eventContent    = {this.renderEventContent}
            eventClick      = {this.handleEventClick}
            eventsSet       = {this.handleEvents}>

          </FullCalendar>

        </div>

        <UserFormDialog
          visible         = {this.state.display}
          onHide          = {this.onHide}
          name            = {this.state.name}
          onNameChange    = {this.handleTextName}
          dtstart         = {this.state.dtstart}
          onDtstartChange = {this.handleTextDate}
          onSubmit        = {this.onSubmit}>

        </UserFormDialog>

      </div>
    )
  }

  handleTextName(text){

    this.setState({ name: text })

  }

  handleTextDate(text){

    this.setState({ dtstart: text })

  }

  handleFieldsText(event){

    const target = event.target
    const value  = target.type === 'checkbox' ? target.checked : target.value
    const name   = target.name

    this.setState({
      [name]: value
    })

  }

  handleDateSelect(selectInfo){

    let idEvent = createEventId()

    let title = this.state.name

    let stringDate = selectInfo.endStr.slice(0, 10)

    let endDate = new Date( stringDate.slice(0, 4), 
                            stringDate.slice(5, 7) - 1, 
                            stringDate.slice(8, 10))

    endDate.setHours( selectInfo.endStr.slice(11, 13), 
                      selectInfo.endStr.slice(14, 16), 
                      selectInfo.endStr.slice(17, 19))    

    let calendarApi = selectInfo.view.calendar       

    calendarApi.addEvent({
      id: idEvent,
      title,
      start: selectInfo.startStr,
      end: endDate,
      allDay: selectInfo.allDay
    })

    this.setState({ currentEvent: calendarApi.getEventById(idEvent), display: true, dtstart: date })

  }

  renderEventContent(eventInfo) {

    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  handleEventClick(clickInfo)
  {

    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()

    }

  }

  handleEvents(events)
  {

    this.setState({
      currentEvents: events
    })

  }

  onHide(name)
  {

    this.state.currentEvent.remove()

    this.setState({
      display: false
    })
  }

  onSubmit(e)
  {

    e.preventDefault()

    this.state.currentEvent.setProp('title', this.state.name)
    this.state.currentEvent.setStart(this.state.dtstart)

    this.setState({ display: false, showMessage: true })

  }

}