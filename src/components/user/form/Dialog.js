import React from 'react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button'

class UserFormDialog extends React.Component {

    constructor(props) {

        super(props)
        this.onHide = this.onHide.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.handleTextName = this.handleTextName.bind(this)
        this.handleTextDate = this.handleTextDate.bind(this)

    }

    onHide() {

        this.props.onHide(true)

    }

    handleTextDate(e){

        this.props.onDtstartChange(e.target.value)
    }

    handleTextName(e)
    {
        this.props.onNameChange(e.target.value)
    }

    onSubmit(e){

        this.props.onSubmit(e)

    }

    render() {
        let textName = this.props.name
        let textDate = this.props.dtstart

        return (
            <Dialog header="Agendamento" visible={this.props.visible} style={{ width: '60vw' }} onHide={this.onHide}>
                <div className="form-demo">
                    <div className="p-d-flex p-jc-center">
                        <div className="card">

                            <form onSubmit={this.onSubmit} className="p-fluid">

                                <div className="p-field">
                                    <span className="p-float-label">
                                        <InputText name="name" value={textName} autoFocus onChange={this.handleTextName} />
                                        <label htmlFor="name">Nome*</label>
                                    </span>
                                </div>

                                <div className="p-field">
                                    <span className="p-float-label">
                                        <Calendar name="dtstart" value={textDate} onChange={this.handleTextDate} showTime showSeconds dateFormat="dd/mm/yy" />
                                        <label htmlFor="dtstart">Data/hora início</label>
                                    </span>
                                </div>

                                <Button type="Submit" label="Submit" className="p-mt-2" />

                            </form>

                        </div>
                    </div>
                </div>
            </Dialog>
        )


    }
}

export default UserFormDialog