// pages/api/fetchData.ts
import { NextApiRequest, NextApiResponse } from "next";
import { parseStringPromise } from "xml2js";

const fetchData = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const apiUrl = "http://openapi.seoul.go.kr:8088/sample/xml/CardSubwayTime/1/5/202411/";
    const response = await fetch(apiUrl);
    const xmlData = await response.text();

    // XML 데이터를 JSON으로 변환
    const jsonData = await parseStringPromise(xmlData, { explicitArray: false });

    res.status(200).json({ data: jsonData });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

export default fetchData;
