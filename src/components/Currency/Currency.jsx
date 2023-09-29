import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  currencySelector,
  isLoadingSelector,
} from 'redux/currencyRedusers/currencySelectors';
import { currencyThunk } from 'redux/currencyRedusers/currencyThunk';
import {
  StyledBox,
  StyledImg,
  StyledOval,
  StyledTBody,
  StyledTable,
  StyledTableHead,
  StyledTd,
  StyledTdBox,
  StyledTh,
  StyledThBox,
} from './Currency.styled';

export const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(currencySelector);
  const isLoading = useSelector(isLoadingSelector);
  const token = useSelector(state => state.auth.token);

  const updateLastUpdatedTime = () => {
    const newTime = Date.now();
    localStorage.setItem('lastUpdatedTime', newTime);
  };

  useEffect(() => {
    if (!token) return;
    const lastUpdatedTime = localStorage.getItem('lastUpdatedTime');

    const isHourPassed = () => {
      const oneHourUpdate = 60 * 60 * 1000;
      return Date.now() - Number(lastUpdatedTime) >= oneHourUpdate;
    };

    if (isHourPassed() || !lastUpdatedTime) {
      dispatch(currencyThunk());
      setCurrency(selectedCurrency);
      updateLastUpdatedTime();
    } else {
      setCurrency(selectedCurrency);
    }
  }, [dispatch, selectedCurrency, token]);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTabletAndMobile = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <div>
      {isDesktop && (
        <StyledBox ai="center" jc="center">
          {isLoading ? (
            <>
              <StyledOval
                height={40}
                width={40}
                color="#4a56e2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4a56e2"
                strokeWidth={4}
                strokeWidthSecondary={4}
              />
            </>
          ) : (
            <StyledBox>
              <StyledTable>
                <StyledTableHead>
                  <StyledThBox>
                    <StyledTh>Currency</StyledTh>
                    <StyledTh>Purchase</StyledTh>
                    <StyledTh>Sale</StyledTh>
                  </StyledThBox>
                </StyledTableHead>
                <StyledTBody>
                  {currency?.length &&
                    currency.map(el => {
                      return (
                        <StyledTdBox>
                          <StyledTd>{el.currencyName}</StyledTd>
                          <StyledTd>{el.rateBuy}</StyledTd>
                          <StyledTd>
                            {el.rateSell.toString().slice(0, -2)}
                          </StyledTd>
                        </StyledTdBox>
                      );
                    })}
                </StyledTBody>
              </StyledTable>
              <img
                src={require('../../images/chart/chart-web.png')}
                alt="chart"
              />
            </StyledBox>
          )}
        </StyledBox>
      )}
      {isTabletAndMobile && (
        <StyledBox maxw="336px">
          {isLoading ? (
            <>
              <StyledOval
                height={40}
                width={40}
                color="#4a56e2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4a56e2"
                strokeWidth={4}
                strokeWidthSecondary={4}
              />
            </>
          ) : (
            <>
              <StyledTable>
                <StyledTableHead padL="20px" marB="8px">
                  <StyledThBox>
                    <StyledTh>Currency</StyledTh>
                    <StyledTh>Purchase</StyledTh>
                    <StyledTh>Sale</StyledTh>
                  </StyledThBox>
                </StyledTableHead>
                <StyledTBody padL="20px" gap="12px">
                  {currency?.length &&
                    currency.map(el => {
                      return (
                        <StyledTdBox>
                          <StyledTd>{el.currencyName}</StyledTd>
                          <StyledTd>{el.rateBuy}</StyledTd>
                          <StyledTd>
                            {el.rateSell.toString().slice(0, -2)}
                          </StyledTd>
                        </StyledTdBox>
                      );
                    })}
                </StyledTBody>
              </StyledTable>
              <StyledImg
                src={require('../../images/chart/chart-tablet.png')}
                alt="chart"
                w="336px"
              />
            </>
          )}
        </StyledBox>
      )}
      {isMobile && (
        <StyledBox maxw="336px">
          {isLoading ? (
            <>
              <StyledOval
                height={40}
                width={40}
                color="#4a56e2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4a56e2"
                strokeWidth={4}
                strokeWidthSecondary={4}
              />
            </>
          ) : (
            <>
              <StyledTable>
                <StyledTableHead padL="20px" marB="8px">
                  <StyledThBox>
                    <StyledTh>Currency</StyledTh>
                    <StyledTh>Purchase</StyledTh>
                    <StyledTh>Sale</StyledTh>
                  </StyledThBox>
                </StyledTableHead>
                <StyledTBody padL="20px" gap="12px">
                  {currency?.length &&
                    currency.map(el => {
                      return (
                        <StyledTdBox>
                          <StyledTd>{el.currencyName}</StyledTd>
                          <StyledTd>{el.rateBuy}</StyledTd>
                          <StyledTd>
                            {el.rateSell.toString().slice(0, -2)}
                          </StyledTd>
                        </StyledTdBox>
                      );
                    })}
                </StyledTBody>
              </StyledTable>
              <StyledImg
                src={require('../../images/chart/chart-tablet.png')}
                alt="chart"
                w="336px"
              />
            </>
          )}
        </StyledBox>
      )}
    </div>
  );
};
