import { Dispatch, SetStateAction } from 'react'
import { DateTime } from 'luxon'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
import { loadCldr } from '@syncfusion/ej2-base'
import * as gregorian from 'cldr-data/main/pt-PT/ca-gregorian.json'
import * as numbers from 'cldr-data/main/pt-PT/numbers.json'
import * as timeZoneNames from 'cldr-data/main/pt-PT/timeZoneNames.json'
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json'
import * as weekData from 'cldr-data/supplemental/weekData.json'

interface ChooseDateProps {
  setCheckoutFase: Dispatch<SetStateAction<string>>
  setSelectedDate: Dispatch<SetStateAction<Date>>
  selectedDate: Date
  minDate: Date
}

export const ChooseDate: React.FC<ChooseDateProps> = ({
  setCheckoutFase,
  setSelectedDate,
  selectedDate,
  minDate,
}) => {
  loadCldr(numberingSystems, gregorian, numbers, timeZoneNames, weekData)

  return (
    <div className='mt-3 xs:mt-6 flex flex-col mx-auto max-w-2xl h-[27rem] xs:h-[40rem] bg-white rounded-md shadow-around'>
      <div className='w-full flex h-[2rem] border-b'>
        <h3 className='my-auto ml-3 font-bold text-green-dark tracking-wide'>
          Agendar entrega
        </h3>
      </div>
      <div className='flex flex-col pt-2 xs:pt-6 w-full mx-auto max-w-6xl h-[21rem] xs:h-[34rem] sm:px-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
        <div className='h-80 w-[17rem] xs:w-[20rem] lg:w-[30rem] mx-auto mt-2 lg:mt-4'>
          <CalendarComponent
            cssClass='calendar-custom-class'
            min={minDate}
            value={selectedDate}
            onChange={(e: any) => {
              setSelectedDate(e.target.value)
            }}
            showTodayButton={false}
            dayHeaderFormat='Narrow'
            locale='pt-PT'
          />
        </div>
        <div className='h-80 w-[90%] mx-auto border-t mt-10 p-4'>
          <p className='text-green-medium tracking-wide text-center'>
            <strong>AVISO: </strong>Entregamos aos fins de semana, incluindo
            domingos, contudo os pedidos de entrega para segundas-feiras e
            feriados serão agendados para o dia seguinte. O horário de entrega é das 9:00 às 19:00.
          </p>
        </div>
      </div>
      <div className='flex w-full h-[4rem] border-t'>
        <div className='flex flex-col w-[65%] xs:w-[55%] lg:w-[78%] p-2'>
          <div className='flex'>
            <h3 className='text-green-dark tracking-wide'>Entregar dia:</h3>
          </div>
          <div className='flex'>
            <h3 className='text-green-dark'>
              {DateTime.fromJSDate(selectedDate)
                .setLocale('pt-pt')
                .toLocaleString(DateTime.DATE_FULL)}
            </h3>
          </div>
        </div>
        <div className='flex w-[45%] lg:w-[22%]  ml-auto p-2'>
          <button
            type='button'
            className='h-full w-full max-w-[8rem] ml-auto flex flex-col rounded-md shadow-md bg-green-extraLight hover:opacity-80 opacity-100'
            onClick={() => setCheckoutFase('payment')}
          >
            <h5 className='text-center m-auto text-green-dark tracking-wider'>
              Continuar
            </h5>
          </button>
        </div>
      </div>
    </div>
  )
}
