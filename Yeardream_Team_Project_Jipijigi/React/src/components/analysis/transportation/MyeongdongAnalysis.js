import React from 'react';
import { Card, CardHeader, Box } from '@mui/material';
import MyeongdongTable from '../table/transportation/MyeongdongTable';

export default function SillimAnalysis() {
    const explanation = "유의확률은 0.001 이하(F = 689.0)로 경로 중 한 가지 이상이 유효할 것이라는 것을 확인 할 수 있었다. (VIF는 0.1 이상 10 미만으로 다중공선성이 없는 것으로 확인되었다.) 다음으로 각 경로에 유의성을 확인한 결과 단계(t = -29.547 , p<0.001)와 신규확진자(t = 11.703, p<0.001)에서 명동역 하차인원에 미치는 영향이 유효한 것으로 확인되었다. 유의한 변수에 대한 비표준화계수를 확인한 결과 단계(-9262.3812)는 음수로, 단계가 증가할 수록 명동역 하차인원 이 낮아짐을 알 수 있었고, 신규확진자(7.8217)는 양수로 신규확진자가 증가할수록 명동역 하차인원이 높아짐을 알 수 있었다. 마지막으로 독립변수에 의해 종속변수가 설명되는 설명력은 55.9%임을 확인할 수 있었다.";
    
    return (
        <Card>
            <CardHeader title="명동역 데이터 분석 결과" subheader="거리두기 단계와 신규확진자 수가 명동역 하차인원에 미치는 영향을 분석하기 위해 다중회귀분석을 실시하였다." />
            <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <CardHeader title="1. 다중회귀 분석 차트" />
                <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFWIkJ%2FbtrmNpqUAO1%2FCjU1WGxwQfBGRBFmm6NfL1%2Fimg.png' alt='다중회귀' width='80%' height='auto' />
                <br/>
                <CardHeader title="2. 다중회귀 분석 요약" />
                <MyeongdongTable />
                <br/>
                <CardHeader title="3. 다중회귀 분석 결과 설명" subheader={explanation} />
                <br/>
            </Box>
        </Card>
    )
}