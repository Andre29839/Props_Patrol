import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  currencySelector,
  isLoadingSelector,
} from 'redux/currencyRedusers/currencySelectors';
import { currencyThunk } from 'redux/currencyRedusers/currencyThunk';
import {
  Eur,
  StyledBox,
  StyledImg,
  StyledOval,
  StyledTBody,
  StyledTable,
  StyledTd,
  StyledTdBox,
  StyledTh,
  StyledThBox,
  Usd,
  WrapperCurrency,
} from './Currency.styled';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(currencySelector);
  const isLoading = useSelector(isLoadingSelector);
  const token = useSelector(state => state.auth.token);

  const currencyChart = useSelector(currencySelector);
  const usdPurch = currencyChart[0]?.rateBuy.toFixed(2);
  const eurPurch = currencyChart[1]?.rateBuy.toFixed(2);

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
    <WrapperCurrency>
      {isDesktop && (
        <StyledBox ai="center" jc="center">
          {isLoading ? (
            <></>
          ) : (
            <StyledBox>
              <StyledTable>
                <StyledThBox>
                  <StyledTh>Currency</StyledTh>
                  <StyledTh>Purchase</StyledTh>
                  <StyledTh>Sale</StyledTh>
                </StyledThBox>
                <StyledTBody>
                  {currency?.length &&
                    currency.map(el => {
                      return (
                        <StyledTdBox key={nanoid()}>
                          <StyledTd>{el.currencyName}</StyledTd>
                          <StyledTd>{el.rateBuy}</StyledTd>
                          <StyledTd>
                            {el.rateSell.toString().slice(0, -2)}
                          </StyledTd>
                        </StyledTdBox>
                      );
                    })}
                  <Usd>{usdPurch}</Usd>
                  <Eur>{eurPurch}</Eur>
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
        <StyledBox>
          {isLoading ? (
            <></>
          ) : (
            <>
              <StyledTable>
                <StyledThBox>
                  <StyledTh>Currency</StyledTh>
                  <StyledTh>Purchase</StyledTh>
                  <StyledTh>Sale</StyledTh>
                </StyledThBox>
                <StyledTBody>
                  {currency?.length &&
                    currency.map(el => {
                      return (
                        <StyledTdBox key={nanoid()}>
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
              />
            </>
          )}
        </StyledBox>
      )}
      {isMobile && (
        <StyledBox>
          {isLoading ? (
            <></>
          ) : (
            <>
              <StyledTable>
                <StyledThBox>
                  <StyledTh>Currency</StyledTh>
                  <StyledTh>Purchase</StyledTh>
                  <StyledTh>Sale</StyledTh>
                </StyledThBox>
                <StyledTBody>
                  {currency?.length &&
                    currency.map(el => {
                      return (
                        <StyledTdBox key={nanoid()}>
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
              />
            </>
          )}
        </StyledBox>
      )}
    </WrapperCurrency>
  );
};

export default Currency;
