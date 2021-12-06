import React from 'react';
import { Card, CardHeader, Box } from '@mui/material';
import LeisureConvenienceTable from '../table/living/LeisureConvenienceTable';

export default function LeisureConvenienceAnalysis() {
    const explanation = "유의확률은 0.001 이하(F = 71.39)로 경로 중 한 가지 이상이 유효할 것이라는 것을 확인 할 수 있었다. (VIF는 0.1 이상 10 미만으로 다중공선성이 없는 것으로 확인되었다.) 다음으로 각 경로에 유의성을 확인한 결과 단계(t = -7.405, p<0.001)에서 여가, 생활편의 검색률에 미치는 영향이 유효한 것으로 확인되었다. 유의한 변수에 대한 비표준화계수를 확인한 결과 단계(-2.1866)는 음수로, 단계가 증가할 수록 여가, 생활편의 검색률이 낮아짐을 알 수 있었다. 마지막으로 독립변수에 의해 종속변수가 설명되는 설명력은 12.2%임을 확인할 수 있었다.";

    return (
        <Card>
            <CardHeader title="여가 및 생활편의 검색어 데이터 분석 결과" subheader="거리두기 단계와 신규확진자 수가 여가, 생활편의 검색률에 미치는 영향을 분석하기 위해 다중회귀분석을 실시하였다." />
            <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <CardHeader title="1. 다중회귀 분석 차트" />
                <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdfbNI9%2FbtrmyDqrdtu%2FiMNBpK7vd5hW1ZfRsIKKik%2Fimg.png' alt='다중회귀' width='80%' height='auto' />
                <br/>
                <CardHeader title="2. 다중회귀 분석 요약" />
                <LeisureConvenienceTable />
                <br/>
                <CardHeader title="3. 다중회귀 분석 결과 설명" subheader={explanation} />
            </Box>
        </Card>
    )
}