# 20200704: 와이파이 세팅

1. PANEL DUE와 보드 연결
2. PANEL이 켜지면, 콘솔 창에 들어가 'M115' 명령을 입력하여 버전 확인
3. 'M552' 명령어 입력했을 때, 'Wifi module is disable'라고 떠야 함.
    (Wifi module is enable이라 뜨면 6번으로)
4. 'M552 S0'을 입력하고, 'Wifi module started' 이라고 떠야 한다.
5. 'M552' 명령어 입력했을 때, 'Wifi module is idle' 이라 뜨면 Wifi 모듈 활성화 성공.
6. 'M587 S"네트워크SSID" P"네트워크비밀번호"' 명령어로 연결할 와이파이를 세팅한다.
7. 'M552 S1' 명령어를 입력하여 와이파이에 연결한다.
8. 이후, PC에서 보드와 같은 와이파이에 접속한다.
9. 웹에 보드 IP를 입력하면 웹에서 세팅할 수 있는 창이 뜬다.

* [참조 링크](https://duet3d.dozuki.com/Guide/1.+Getting+Connected+to+your+Duet/7?lang=en)