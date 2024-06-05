'use client';

import React from 'react';

import { CompanyFormProps, CompanyForm } from '@/app/components/CompanyForm';
import { ModalProps, Modal } from '@/app/components/Modal';

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyFormModal({
  onSubmit,
  ...rest
}: CompanyFormModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
