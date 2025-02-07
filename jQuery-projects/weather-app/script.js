$(document).ready(function() {
    const apiKey = '7abb9a0098b73369439dd73ccbfb3512'

    // 검색 버튼 클릭 시
    $('#search-btn').on('click', function() {
        const city = $('#city').val().trim();

        if (city === '') {
            $('#error-message').text('도시 이름을 입력해주세요.').show();
            $('#weather-info').empty();
            return;
        }

        // 로딩 표시
        $('#loading').show();
        $('#error-message').hide();
        $('#weather-info').empty();

        // AJAX 요청
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`,
            method: 'GET',
            success: function(response) {
                $('#loading').hide();

                const weather = response.weather[0].description;
                const temp = response.main.temp;
                const cityName = response.name;

                // 날씨 정보 표시
                const weatherInfo = `
                    <h3>${cityName}의 날씨</h3>
                    <p>상태: ${weather}</p>
                    <p>온도: ${temp}°C</p>
                `;
                $('#weather-info').html(weatherInfo);
            },
            error: function() {
                $('#loading').hide();
                $('#error-message').text('잘못된 도시 이름입니다. 다시 시도해주세요.').show();
                $('#weather-info').empty();
            }
        });
    });

    // Enter 키로도 검색 가능
    $('#city').on('keypress', function(e) {
        if (e.which === 13) {
            $('#search-btn').click();
        }
    });
});
