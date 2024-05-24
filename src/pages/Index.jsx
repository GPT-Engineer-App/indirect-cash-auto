import React, { useState } from "react";
import { Container, VStack, HStack, Text, Input, Box, Divider, Heading } from "@chakra-ui/react";

const Index = () => {
  const [currentYear, setCurrentYear] = useState({
    netIncome: 0,
    depreciation: 0,
    amortization: 0,
    currentAssets: 0,
    currentLiabilities: 0,
    debt: 0,
    equity: 0,
    capitalExpenditures: 0,
    investments: 0,
    salesDisposals: 0,
    netChangeDebt: 0,
    netChangeEquity: 0,
    dividendsPaid: 0,
  });

  const [previousYear, setPreviousYear] = useState({
    netIncome: 0,
    depreciation: 0,
    amortization: 0,
    currentAssets: 0,
    currentLiabilities: 0,
    debt: 0,
    equity: 0,
    capitalExpenditures: 0,
    investments: 0,
    salesDisposals: 0,
    netChangeDebt: 0,
    netChangeEquity: 0,
    dividendsPaid: 0,
  });

  const handleInputChange = (e, year, field) => {
    const value = parseFloat(e.target.value) || 0;
    if (year === "current") {
      setCurrentYear({ ...currentYear, [field]: value });
    } else {
      setPreviousYear({ ...previousYear, [field]: value });
    }
  };

  const calculateCashFlowFromOperations = () => {
    const netIncome = currentYear.netIncome;
    const depreciation = currentYear.depreciation;
    const amortization = currentYear.amortization;
    const changesInWorkingCapital = currentYear.currentAssets - previousYear.currentAssets - (currentYear.currentLiabilities - previousYear.currentLiabilities);
    return netIncome + depreciation + amortization - changesInWorkingCapital;
  };

  const calculateCashFlowFromInvesting = () => {
    const capitalExpenditures = currentYear.capitalExpenditures;
    const investments = currentYear.investments;
    const salesDisposals = currentYear.salesDisposals;
    return -capitalExpenditures - investments + salesDisposals;
  };

  const calculateCashFlowFromFinancing = () => {
    const netChangeDebt = currentYear.netChangeDebt;
    const netChangeEquity = currentYear.netChangeEquity;
    const dividendsPaid = currentYear.dividendsPaid;
    return netChangeDebt + netChangeEquity - dividendsPaid;
  };

  const totalCashFlow = calculateCashFlowFromOperations() + calculateCashFlowFromInvesting() + calculateCashFlowFromFinancing();

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">
          Indirect Cash Flow Statement
        </Heading>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Income Statement
          </Heading>
          <HStack spacing={4}>
            <Text width="20%">Title</Text>
            <Text width="20%">Current Year</Text>
            <Text width="20%">Previous Year</Text>
          </HStack>
          <Divider my={2} />
          <HStack spacing={4}>
            <Text width="20%">Net Income</Text>
            <Input width="20%" type="number" value={currentYear.netIncome} onChange={(e) => handleInputChange(e, "current", "netIncome")} />
            <Input width="20%" type="number" value={previousYear.netIncome} onChange={(e) => handleInputChange(e, "previous", "netIncome")} />
          </HStack>
          <HStack spacing={4}>
            <Text width="20%">Depreciation</Text>
            <Input width="20%" type="number" value={currentYear.depreciation} onChange={(e) => handleInputChange(e, "current", "depreciation")} />
            <Input width="20%" type="number" value={previousYear.depreciation} onChange={(e) => handleInputChange(e, "previous", "depreciation")} />
          </HStack>
          <HStack spacing={4}>
            <Text width="20%">Amortization</Text>
            <Input width="20%" type="number" value={currentYear.amortization} onChange={(e) => handleInputChange(e, "current", "amortization")} />
            <Input width="20%" type="number" value={previousYear.amortization} onChange={(e) => handleInputChange(e, "previous", "amortization")} />
          </HStack>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Balance Sheet
          </Heading>
          <HStack spacing={4}>
            <Text width="20%">Title</Text>
            <Text width="20%">Current Year</Text>
            <Text width="20%">Previous Year</Text>
          </HStack>
          <Divider my={2} />
          <HStack spacing={4}>
            <Text width="20%">Current Assets</Text>
            <Input width="20%" type="number" value={currentYear.currentAssets} onChange={(e) => handleInputChange(e, "current", "currentAssets")} />
            <Input width="20%" type="number" value={previousYear.currentAssets} onChange={(e) => handleInputChange(e, "previous", "currentAssets")} />
          </HStack>
          <HStack spacing={4}>
            <Text width="20%">Current Liabilities</Text>
            <Input width="20%" type="number" value={currentYear.currentLiabilities} onChange={(e) => handleInputChange(e, "current", "currentLiabilities")} />
            <Input width="20%" type="number" value={previousYear.currentLiabilities} onChange={(e) => handleInputChange(e, "previous", "currentLiabilities")} />
          </HStack>
          <HStack spacing={4}>
            <Text width="20%">Debt</Text>
            <Input width="20%" type="number" value={currentYear.debt} onChange={(e) => handleInputChange(e, "current", "debt")} />
            <Input width="20%" type="number" value={previousYear.debt} onChange={(e) => handleInputChange(e, "previous", "debt")} />
          </HStack>
          <HStack spacing={4}>
            <Text width="20%">Equity</Text>
            <Input width="20%" type="number" value={currentYear.equity} onChange={(e) => handleInputChange(e, "current", "equity")} />
            <Input width="20%" type="number" value={previousYear.equity} onChange={(e) => handleInputChange(e, "previous", "equity")} />
          </HStack>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Cash Flow from Operations
          </Heading>
          <Text>Net Income: {currentYear.netIncome}</Text>
          <Text>Depreciation: {currentYear.depreciation}</Text>
          <Text>Amortization: {currentYear.amortization}</Text>
          <Text>Changes in Working Capital: {currentYear.currentAssets - previousYear.currentAssets - (currentYear.currentLiabilities - previousYear.currentLiabilities)}</Text>
          <Text>Cash Flow from Operations: {calculateCashFlowFromOperations()}</Text>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Cash Flow from Investing
          </Heading>
          <HStack spacing={4}>
            <Text width="20%">Capital Expenditures</Text>
            <Input width="20%" type="number" value={currentYear.capitalExpenditures} onChange={(e) => handleInputChange(e, "current", "capitalExpenditures")} />
          </HStack>
          <HStack spacing={4}>
            <Text width="20%">Investments</Text>
            <Input width="20%" type="number" value={currentYear.investments} onChange={(e) => handleInputChange(e, "current", "investments")} />
          </HStack>
          <HStack spacing={4}>
            <Text width="20%">Sales/Disposals</Text>
            <Input width="20%" type="number" value={currentYear.salesDisposals} onChange={(e) => handleInputChange(e, "current", "salesDisposals")} />
          </HStack>
          <Text>Cash Flow from Investing: {calculateCashFlowFromInvesting()}</Text>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Cash Flow from Financing
          </Heading>
          <HStack spacing={4}>
            <Text width="20%">Net Change in Debt</Text>
            <Input width="20%" type="number" value={currentYear.netChangeDebt} onChange={(e) => handleInputChange(e, "current", "netChangeDebt")} />
          </HStack>
          <HStack spacing={4}>
            <Text width="20%">Net Change in Equity</Text>
            <Input width="20%" type="number" value={currentYear.netChangeEquity} onChange={(e) => handleInputChange(e, "current", "netChangeEquity")} />
          </HStack>
          <HStack spacing={4}>
            <Text width="20%">Dividends Paid</Text>
            <Input width="20%" type="number" value={currentYear.dividendsPaid} onChange={(e) => handleInputChange(e, "current", "dividendsPaid")} />
          </HStack>
          <Text>Cash Flow from Financing: {calculateCashFlowFromFinancing()}</Text>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Total Cash Flow
          </Heading>
          <Text>Total Cash Flow: {totalCashFlow}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
