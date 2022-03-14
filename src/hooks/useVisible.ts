import { useCallback, useState } from "react";

function useVisible() {
  const [visible, setVisible] = useState<'table' | 'form'>('table');

  const showForm = useCallback(() => setVisible('form'), [setVisible]);

  const showTable = useCallback(() => setVisible('table'), [setVisible]);

  return {
    formIsVisible: visible === 'form',
    tableIsVisible: visible === 'table',
    showForm,
    showTable
  }
}

export default useVisible;