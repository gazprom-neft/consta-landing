import { fetchData } from '@/utils/fetch';

export async function sendFormData(params: { email: string; message: string }) {
  const formData = new FormData();
  formData.append('email', params.email);
  formData.append('message', params.message);

  return await fetchData<null>(`http://consta.gazprom-neft.ru/send.php`, {
    method: 'POST',
    body: formData,
  });
}
