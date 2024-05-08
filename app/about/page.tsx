import React from "react";
import archDiag from "./archDiag.jpg";

export default function page() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 w-1/2 mt-10 mx-10 p-5 gap-5">
        <div className="p-20 bg-neutral-700 rounded-xl">
          <div>
            <h1 className="text-2xl underline font-bold tracking-wide">
              Challenges
            </h1>
            <p className="mt-5 text-lg">
              Almost all of the Network Traffic Datasets are highly
              comprehensive and bulky i.e. they have very high number of
              dimensions which in turn makes it computationally complex and time
              consuming to process the datasets.
              <br />
              <br /> The Datasets are not balanced which makes the Models Bias
              towards a certain class which leads to inaccurate predictions.
              <br />
              <br />
              There is no simple UI/UX Available, also the current systems are
              complex which leads to making it difficult for the user.
              <br />
              <br /> There are many state of the art frameworks available but
              there is no framework yet that provides us the best & reliable
              results.
            </p>
          </div>
        </div>
        <div className="p-20 bg-neutral-700 rounded-xl">
          <div>
            <h1 className="text-2xl underline font-bold tracking-wide">
              Project Objectives
            </h1>
            <p className="mt-5 text-lg">
              This research aims to reduce the Dimensions of the Data to make
              the entire process of analyzing the Network Traffic Flow
              computationally efficient.
              <br />
              <br /> Proposed a metaheuristic-based feature selection framework
              by using shap, BGWO and PSO techniques.
              <br />
              <br />
              To efficiently analyze data in IoT networks, we use models like
              Decision Tree (DT), AdaBoost (AB), Random Forest (RF),
              Convolutional Neural Network (CNN), Bidirectional Long Short-Term
              Memory(BiLSTM), and Hybrid Deep Convolutional Neural Network
              Bidirectional Long Short-Term Memory to find cyber threats. These
              models help us make fast decisions to spot and tackle cyber
              threats in IoT networks.
              <br />
              <br /> The performance of our cyber-threat detection framework is
              assessed using the Bot-IoT dataset. We evaluate the number of
              selected features, accuracy (ACC), detection rate (DR), precision
              (PR),f1 score and false positive rate (FPR) for the same
              experimental scenarios.
            </p>
          </div>
        </div>
        <div className="p-20 bg-neutral-700 rounded-xl">
          <div>
            <h1 className="text-2xl underline font-bold tracking-wide">
              Solution Proposed
            </h1>
            <p className="mt-5 text-lg">
              This Research provides a Metaheuristic Feature Selection Framework
              which first employs SHAP which is an Explainable AI Algorithm.
              <br />
              <br /> The Selected Feature Subset is then passed to BGWO & PSO
              independently through which we get two feature subsets Feature
              Subset 2 & Feature Subset 3.
              <br />
              <br />
              These Selected Feature Subsets are then evaluated independently
              using various Machine Learning & Deep Learning Models.
              <br />
              <br /> This Framework supersedes all the other Frameworks and
              provides the Best Results which are described in Brief in the
              Results Section.
            </p>
            <img src={archDiag.src} alt="" className="mt-5 -mb-5" />
          </div>
        </div>
        <div className="p-20 bg-neutral-700 rounded-xl">
          <div>
            <h1 className="text-2xl underline font-bold tracking-wide">
              Tech Stack
            </h1>
            <p className="mt-5 text-lg">
              Google Colab is used for implementation of the proposed model.
              Google Colab lets you work together on code with cloud-based
              computing resources, providing access to high-performance
              computing without needing your own powerful hardware. In our
              project, we used RAM of 20 GB and disk space of 250 GB.
            </p>
          </div>
        </div>
        <div className="p-20 bg-neutral-700 rounded-xl">
          <div>
            <h1 className="text-xl underline font-bold tracking-wide">
              Algorithms Used.
            </h1>
            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="p-2 rounded-md">
                <h1 className="font-extrabold">Machine Learning Models</h1>
                <ul className="mt-3.5">
                  <li>Decision Tree</li>
                  <li>Random Forest</li>
                  <li>Logistic Regression</li>
                  <li>Ada-Boost</li>
                  <li>XG-Boost</li>
                  <li>SVM</li>
                  <li>KNN</li>
                </ul>
              </div>
              <div className="p-2 rounded-md">
                <h1 className="font-extrabold">Deep Learning Models</h1>
                <ul className="mt-3.5">
                  <li>CNN</li>
                  <li>Bi-LSTM</li>
                  <li>DCNN-Bi-LSTM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
