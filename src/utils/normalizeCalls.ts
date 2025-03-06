import { Call, RawCall } from "../models";

// конвертируем ответ, чтобы использовать только нужные поля
export const normalizeCalls = (callsFromApi: RawCall[]): Call[] => {
  return callsFromApi.map((call) => ({
    id: call.id,
    in_out: call.in_out,
    date: call.date,
    from_number: call.from_number,
    source: call.source || call.line_name,
    status: call.status,
    time: call.time,
    person_avatar:
      call.person_avatar || "https://lk.skilla.ru/img/noavatar.jpg",
    person_name: call.person_name,
    person_surname: call.person_surname,
    errors: call.errors,
    partner_data: call.partner_data,
    partnership_id: call.partnership_id,
    record: call.record,
  }));
};
