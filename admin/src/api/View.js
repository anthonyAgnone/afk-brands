import React from 'react';
import Loading from './Loading';
import DataError from './ErrorHandling';

const View = ({ loading, err, data, handleSelected, component: C }) => {
  return (
    <Loading loading={loading}>
      <DataError err={err}>
        <C data={data} />
      </DataError>
    </Loading>
  );
};

export default View;

export const withinView = C => props => <View {...props} component={C} />;
