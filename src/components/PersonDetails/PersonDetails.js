
export default function PersonDetails({personDetail}) {
    return(
        <div className='card card-body'>
            <p>Выбран пользователь <b>{personDetail.firstName + ' ' + personDetail.lastName}</b></p>
            Описание:
            <textarea className="form-control" defaultValue={personDetail.description} />
            <p>Адрес проживания: <b>{personDetail.address.streetAddress}</b></p>
            <p>Город: <b>{personDetail.address.city}</b></p>
            <p>Провинция/штат: <b>{personDetail.address.state}</b></p>
            <p>Индекс: <b>{personDetail.address.zip}</b></p>
        </div>
    )
}